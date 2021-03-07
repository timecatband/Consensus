import spacy
class SpacyModel:
    def __init__(self):
        self.nlp = spacy.load("en_core_web_trf")
    def get_entities(self, sentence):
        doc = self.nlp(sentence)
        return [ent.__str__() for ent in doc.ents]
