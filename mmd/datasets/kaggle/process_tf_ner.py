import pandas as pd
data = pd.read_csv("ner_dataset.csv", encoding="latin1")
data = data.drop(['POS'], axis=1)
data = data.fillna(method="ffill")

class SentenceGetter(object):
    
    def __init__(self, data):
        self.n_sent = 1
        self.data = data
        self.empty = False
        agg_func = lambda s: [(w, t) for w, t in zip(s["Word"].values.tolist(),s["Tag"].values.tolist())]
        self.grouped = self.data.groupby("Sentence #").apply(agg_func)
        self.sentences = [s for s in self.grouped]
    
    def get_next(self):
        try:
            s = self.grouped["Sentence: {}".format(self.n_sent)]
            self.n_sent += 1
            return s
        except:
            return None
 
getter = SentenceGetter(data)
sent = getter.get_next()

wordFile = open("train_sentences.txt", "a")
tagFile = open("train_tags.txt", "a")

while sent != None:
    first = True
    for (word,tag) in sent:
        if first == False:
            wordFile.write(" ")
            tagFile.write(" ")
        wordFile.write(word)
        tagFile.write(tag)
        first = False
    wordFile.write("\n")
    tagFile.write("\n")
    sent = getter.get_next()
    

wordFile.close()
tagFile.close()
