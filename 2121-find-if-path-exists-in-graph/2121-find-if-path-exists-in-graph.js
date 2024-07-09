/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, start, dest) {
     const graph = {}
    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return hasPath(graph, start, dest)
};

const createGraph = (edges) => {
    const graph = {}
    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

const hasPath = (graph, start, dest) => {
    const stack = [start]
    const visited = new Set()

    while (stack.length > 0) {
        const node = stack.pop()
        if (node == dest) return true
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return false
}