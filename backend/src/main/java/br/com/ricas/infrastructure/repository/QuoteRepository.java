package br.com.ricas.infrastructure.repository;

import br.com.ricas.domain.model.Quote;
import br.com.ricas.infrastructure.entity.QuoteEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import io.quarkus.hibernate.orm.panache.PanacheRepositoryBase;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class QuoteRepository implements PanacheRepositoryBase<QuoteEntity, Integer> {
}
