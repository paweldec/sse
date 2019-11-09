package com.paweldec.sse;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalTime;

@Builder
@Getter
class TimeEvent {
    final LocalTime time;
}
