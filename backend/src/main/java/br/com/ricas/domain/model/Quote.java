package br.com.ricas.domain.model;

import br.com.ricas.infrastructure.entity.QuoteEntity;

public class Quote {
    private Long id;
    private String message;
    private String author;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }



    public Quote(Long id, String message, String author) {
        this.id = id;
        this.message = message;
        this.author = author;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public QuoteEntity toEntity() {
       return new QuoteEntity(this.message, this.author);
    }
}
