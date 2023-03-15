package br.com.ricas.domain.service.impl;

import br.com.ricas.domain.model.Quote;
import br.com.ricas.domain.service.QuoteService;
import br.com.ricas.infrastructure.entity.QuoteEntity;
import br.com.ricas.infrastructure.repository.QuoteRepository;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
@Transactional
public class QuoteServiceImpl implements QuoteService {
    @Inject
    QuoteRepository quoteRepository;

    @Override
    public Quote create(Quote quote) {
        quoteRepository.persist(quote.toEntity());
        return quote;
    }

    @Override
    public List<Quote> findAll() {
        return quoteRepository.findAll().stream().map(QuoteEntity::toDomain).toList();
    }
}
