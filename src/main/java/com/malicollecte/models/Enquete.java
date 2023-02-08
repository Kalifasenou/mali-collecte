package com.malicollecte.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.File;
import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Enquete {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String libelle;
    private String description;
    private LocalDate datedebut;
    private LocalDate datefin;
    private String statut;

    //private String nomOrganisation;
    private Boolean etat = false;

    private String type;

    private File images;


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User utilisateur;


    @OneToOne(orphanRemoval = true)
    @JsonIgnore
    @JoinTable(name = "enquete_resultat",
            joinColumns = @JoinColumn(name = "enquete_id"),
            inverseJoinColumns = @JoinColumn(name = "resultat_id"))
    private Resultat resultat;

}
