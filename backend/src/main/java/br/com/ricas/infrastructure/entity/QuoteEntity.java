package br.com.ricas.infrastructure.entity;

import br.com.ricas.domain.model.Quote;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@Table(name = "quote")
public class QuoteEntity extends PanacheEntity {

    private String message;


    private String author;


    public String getMessage() {
        return message;
    }

    public QuoteEntity(String message, String author) {
        this.message = message;
        this.author = author;
    }
    public QuoteEntity() {}
    public void setMessage(String message) {
        this.message = message;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    public Quote toDomain() {
        return new Quote(this.id, this.message, this.author);
    }
}
