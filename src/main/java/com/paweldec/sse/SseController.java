package com.paweldec.sse;

import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.LocalTime;

@RestController
@RequestMapping("/sse")
public class SseController {

    @GetMapping("/time")
    public Flux<ServerSentEvent<TimeEvent>> streamTimeEvents() {
        return Flux.interval(Duration.ofSeconds(1))
                .map(sequence ->  ServerSentEvent.<TimeEvent> builder()
                        .id(String.valueOf(sequence))
                        .event("message") // <-- event name is important if u want catch events directly by EventSource::onmessage in frontend
                        .data(TimeEvent.builder()
                            .time(LocalTime.now())
                            .build())
                        .build());
    }

}
