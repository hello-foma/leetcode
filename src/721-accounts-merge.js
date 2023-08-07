/**
 Need to find all connected account records

 1. We can assume that each email - is a graph node
 2. Fill graph with nodes and connections
 3. Nodes are connected if they on same record

 1. We should go for each record
 2. Get first email
 3. Add as key of graph with first elem as name is not exist
 4. Go for rest
 5. Add rest to the connections of current node
 6. If no connection node, create it with name
 7. Past current node as connection of this connection
 8. create hash of visited
 9. Go for each node in graph
 10. If not visited, mark as visited
 11. Fill temp hash,
 12. go for each connection of node
 13. When no more connections, sort hash, add first elem as name
 14. put at result
 15. return result

 O(n log(n)), O(n)
 */
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  if (accounts.length === 1) {
    const [name, ...emails] = accounts;
    return [name, ...emails.sort()];
  }

  const graph = {};

  const saveAtGraph = (userName, email, connection) => {
    if (!Array.isArray(graph[email])) {
      graph[email] = [userName];
    }

    if (connection) {
      graph[email].push(connection);
    }
  }

  for(let i = 0; i < accounts.length; i++) {
    const [userName, email, ...connections] = accounts[i];

    saveAtGraph(userName, email);

    for(let k = 0; k < connections.length; k++) {
      const connection = connections[k];

      saveAtGraph(userName, email, connection);
      saveAtGraph(userName, connection, email);
    }
  }

  const visited = {};

  const fillRecord = (email, arr) => {
    if (visited[email]) {
      return null;
    }

    visited[email] = true;
    arr.push(email);

    const [name, ...connections] = graph[email];

    for (let i = 0; i < connections.length; i++) {
      let connection = connections[i];

      fillRecord(connection, arr);
    }

    return arr;
  }

  const result = [];

  Object.keys(graph).forEach(email => {
    const emailResult = fillRecord(email, []);

    if (emailResult) {
      const userName = graph[email][0];

      result.push([userName, ...emailResult.sort()]);
    }
  });

  return result;
};
