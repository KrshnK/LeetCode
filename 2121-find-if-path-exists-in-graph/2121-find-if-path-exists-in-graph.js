function validPath(n, edges, source, destination) {
    // Step 1: Build the graph using adjacency list
    const graph = new Array(n).fill().map(() => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // Step 2: Perform DFS to find if there's a path from source to destination
    const visited = new Array(n).fill(false);
    
    function dfs(node) {
        if (node === destination) {
            return true;
        }
        visited[node] = true;
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    // Start DFS from the source vertex
    return dfs(source);
}

