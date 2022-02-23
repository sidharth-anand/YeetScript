import graphviz, re, sys

if len(sys.argv) != 3:
    print(
        "Script usage incorrect.\n\nUsage: python dfa.py <path-to-rules-file> <output-file>\nExample: python dfa.py \"../src/definition/ys.rules\" \"dfa.png\""
    )
    exit(1)

else:
    filename = sys.argv[1] # ../src/definition/ys.rules
    output_file = sys.argv[2].split(".")[0]
    output_file_extension = sys.argv[2].split(".")[1]

    with open(filename, "r") as file:
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

                if definition[1] == "\\":
                    dfa.edge(n1, n2, label="BACKSLASH")
                else:
                    dfa.edge(n1, n2, label=definition[1])

            else:
                emitDefinition = definition[2].split(" emit ")

                n1 = definition[0]
                n2 = emitDefinition[0]

                dfa.node(n1)
                dfa.node(n2, shape="doublecircle")

                if definition[1] == "\\":
                    dfa.edge(n1, n2, label="BACKSLASH")
                else:
                    dfa.edge(n1, n2, label=definition[1])

        
        dfa.render(filename=output_file, directory="../images", format=output_file_extension, view=True)
