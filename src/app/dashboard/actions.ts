"use server";

const MAX_NODES = 6;

export async function renderGraph(formData: FormData) {
  const graphNotation = formData.get("graph-notation") as string;

  if (!graphNotation) {
    return {
      message: "Hey, your graph notation is missing!",
    };
  }

  // CODE FOR TASK 3.4 -----------------------------------------
  const lines = graphNotation.split("\n").filter((line) => line.trim());
  const nodes = new Set<string>();
  const edges = new Set<string>();

  try {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Validate line format using regex (single uppercase letter node followed by arrow and another uppercase letter)
      const edgeMatch = line.match(/^([A-Z])->([A-Z])$/);
      if (!edgeMatch) {
        return {
          message: `Hey, there was an error parsing line ${
            i + 1
          } of your graph notation!`,
        };
      }

      const [, source, target] = edgeMatch;
      nodes.add(source);
      nodes.add(target);
      edges.add(source + target);

      // Check if we've exceeded max nodes
      if (nodes.size > MAX_NODES) {
        // Convert nodes to array and slice to keep only first MAX_NODES
        const nodesArray = Array.from(nodes).slice(0, MAX_NODES);
        // Filter edges to only include edges with nodes in our sliced set
        const validEdges = Array.from(edges).filter(
          (edge) => nodesArray.includes(edge[0]) && nodesArray.includes(edge[1])
        );

        return {
          nodes: nodesArray,
          edges: validEdges,
        };
      }
    }

    return {
      nodes: Array.from(nodes),
      edges: Array.from(edges),
    };
  } catch (error) {
    return {
      message: "Hey, there was an error parsing your graph notation!",
    };
  }
  // END OF CODE FOR TASK 3.4 ----------------------------------
}
