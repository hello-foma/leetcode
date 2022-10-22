/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}

 We can finish all courses if each prerequiset are filled
 Prerequisite are filled if prev course level lower then totalNum and previous finished
 If already met, get from saved finished state
 If its have prerequisites, check if that finished
 If unfinished, we look can we finish it
 We can build hash of relations by prerequisites
 Do for each prerequisites

 O(n), O(n)

 Topological sort
 1. Create a graph of relations
 2. Create a hash of occurrences
 3. Look for unlocked elems (occurrence === 0), put at queue
 4. For queue
 5. Check if has some relations
 6. If has one, remove that relation from occurrences
 7. Check, if 0, put at queue
 8. Mark this value as visited (reached)
 9. Check is reached equal to length

 O(n), O(n)


 */
var canFinish = function(numCourses, prerequisites) {
  /*
  // DFS
  if (numCourses === 0) {
      return false;
  }

  if (prerequisites.length === 0) {
      return true;
  }

  const relations = {};
  let hash = {};

  for(let i = 0; i < prerequisites.length; i++) {
      const course = prerequisites[i];
      const [label, prev] = course;

      if (Array.isArray(relations[label])) {
          relations[label].push(prev);
      } else {
          relations[label] = [prev];
      }
  }

  const isCanFinishCourse = (label) => {
      if (label > numCourses) {
          return false;
      }

      if (typeof hash[label] === 'boolean') {
          return hash[label];
      } else {
          hash[label] = false;
          if(Array.isArray(relations[label])) {
              const isFilled = relations[label].every((relation) => isCanFinishCourse(relation));
              if (!isFilled) {
                  return false;
              };
          }

          hash[label] = true;
          return true;
      }
  };

  return Object.keys(relations).every((label) =>
                                      relations[label].every((relation) => isCanFinishCourse(relation)));
                                      */
  // Topological
  if (numCourses === 0) {
    return false;
  }

  if (prerequisites.length === 0) {
    return true;
  }

  const graph = {};
  const occurrences = new Array(numCourses).fill(0);

  for(let i = 0; i < prerequisites.length; i++) {
    const [label, prev] = prerequisites[i];
    occurrences[prev]++;


    if (Array.isArray(graph[label])) {
      graph[label].push(prev);
    } else {
      graph[label] = [prev];
    }
  }

  const stack = [];
  for(let i = 0; i < occurrences.length; i++) {
    if (occurrences[i] === 0) {
      stack.push(i);
    }
  }

  let checked = 0;
  while(stack.length) {
    checked++;

    const label = stack.pop();
    if (Array.isArray(graph[label])) {
      for(let j = 0; j < graph[label].length; j++) {
        const prev = graph[label][j];
        occurrences[prev]--;

        if (occurrences[prev] === 0) {
          stack.push(prev);
        }
      }
    }
  }

  return checked === numCourses;
}
