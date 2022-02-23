import graphviz, re

with open("../definition/ys.rules", "r") as file:
    rulesFile = file.read()

    ruleDefinitions = list(
        filter(
            lambda x: len(x) > 0,
            [
                x.strip()
                for x in "".join(re.split(r"\[[ A-Z]*\]", rulesFile)).split("\n")
            ],
        )
    )

    dfa = graphviz.Digraph(name="DFA")

    for ruleDefinition in ruleDefinitions:
        definition = ruleDefinition.split(" - ")

        if "emit" not in definition[2]:
            n1 = definition[0]
            n2 = definition[2]

            if definition[1] == '\\':
                dfa.edge(n1, n2, label="BACKSLASH") 
            else:
                dfa.edge(n1, n2, label=definition[1]) 

        else:
            emitDefinition = definition[2].split(" emit ")

            n1 = definition[0]
            n2 = emitDefinition[0]

            dfa.node(n1)
            dfa.node(n2, shape="doublecircle")

            if definition[1] == '\\':
                dfa.edge(n1, n2, label="BACKSLASH") 
            else:
                dfa.edge(n1, n2, label=definition[1]) 

dfa.render(filename="output", format="png", view=True)
