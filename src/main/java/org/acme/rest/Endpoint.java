package org.acme.rest;

import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import org.acme.model.Counter;
import org.acme.repository.CounterRepository;

import java.time.LocalDateTime;

@Path("")
public class Endpoint {

    @Inject
    CounterRepository counterRepository;

    @Path("/count")
    @GET
    @Transactional
    public Integer count() {
        Counter counter;
        try {
            counter = counterRepository.findById(1L);
            counter.setCounter(counter.getCounter() + 1);
        } catch (Exception e) {
            counter = new Counter();
            counter.setCounter(1);
        }
        counter.setLastUpdated(LocalDateTime.now());
        counterRepository.persist(counter);
        return counter.getCounter();
    }
}