package br.com.ricas.application.web;

import br.com.ricas.application.web.response.QuoteResponse;
import br.com.ricas.domain.model.Quote;
import br.com.ricas.domain.service.QuoteService;
import io.quarkus.security.Authenticated;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/quote")
public class QuoteController {

    @Inject
    QuoteService quoteService;
    @POST()
    @Authenticated
    @Produces(MediaType.APPLICATION_JSON)
    public QuoteResponse create(Quote quote) {
        quoteService.create(quote);
        return new QuoteResponse(quote.getMessage(), quote.getAuthor());
    }

    @GET()
    public List<Quote> list() {
        return quoteService.findAll();
    }
}
