/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, start, dest) {
  const graph = createGraph(edges);
  return hasPath(graph, start, dest);
};

const createGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = new Set();
    if (!(b in graph)) graph[b] = new Set();
    graph[a].add(b);
    graph[b].add(a);
  }
  return graph;
};

const hasPath = (graph, start, dest) => {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node == dest) return true;
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
};
