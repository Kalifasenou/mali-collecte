package com.malicollecte.ServiceImplementation;

import com.malicollecte.Services.QuestionService;
import com.malicollecte.models.Question;
import com.malicollecte.repository.QuestionRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private final QuestionRepositorie questionRepositorie;

    public QuestionServiceImpl(QuestionRepositorie questionRepositorie) {
        this.questionRepositorie = questionRepositorie;
    }


    /**
     * @param type
     * @param question
     * @return
     */
    @Override
    public Question CreerUneQuestion(String type, Question question) {
        return questionRepositorie.save(question);
    }

    /**
     * @param id
     * @return
     */
    @Override
    public Question AfficherQuestion(Long id) {
        return questionRepositorie.findById(id).get();
    }

    /**
     * @param id
     */
    @Override
    public void SupprimerQuestion(Long id) {
        questionRepositorie.deleteById(id);

    }
}
