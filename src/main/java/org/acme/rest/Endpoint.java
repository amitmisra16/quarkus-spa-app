package org.acme.rest;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("")
public class Endpoint {
    private static int COUNTER = 0;

    @Path("/count")
    @GET
    public Integer count() {
        return COUNTER++;
    }
}