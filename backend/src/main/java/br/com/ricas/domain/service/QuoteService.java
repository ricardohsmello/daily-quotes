package br.com.ricas.domain.service;

import br.com.ricas.domain.model.Quote;
import br.com.ricas.infrastructure.entity.QuoteEntity;

import java.util.List;

public interface QuoteService {
    public Quote create(Quote quote);
    public List<Quote> findAll();
}
