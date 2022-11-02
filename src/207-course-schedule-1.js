/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}

 We need to check can we complete all prerequisites
 prerequisites are always value of two: [courseNumber, prevCourse]
 We can complete all courses if there is no blocking prerequisites
 Blocking if to complete that course, we need to comlete this one, like connected graph

 1. We need to build graph of courses
 2. Check is graph are undirected, connected
 3. If so - we can't solve all courses

 1. Go for each prerequisites and fill hash of courses
 2. Go for each course from 0 to num-1 and check is there are connected
 3. We have second hash as "isSolveable" to save already checked
 4. Take value from hash, is exist
 5. If none, go until met same value or null as prerequisites
 6. We have hash "isVisited" to detect, is there are cycle
 7. At first check at "courses", then "isSolved", then "isVisited" (?)
 8. If none returned false as cycle, return true

 O(n), O(n)
 */
var canFinish = function(numCourses, prerequisites) {
  if (numCourses === 1 || prerequisites.length === 0) {
    return true;
  }

  const courses = {};

  for(let i = 0; i < prerequisites.length; i++) {
    const [course, depends] = prerequisites[i];

    if (courses[course]) {
      courses[course].push(depends);
    } else {
      courses[course] = [depends];
    }
  }

  const visited = {};
  const solved = {};

  const checkCourse = (course) => {
    if (solved[course]) {
      return true;
    }

    if (visited[course]) {
      return false;
    }

    visited[course] = true;

    const preRequisites = courses[course];
    const isHasPrerequisites = Array.isArray(preRequisites) && preRequisites.length;
    if (isHasPrerequisites) {
      const isPrerequisitesSolveable = preRequisites.every(prerequisite => checkCourse(prerequisite));

      if (!isPrerequisitesSolveable) {
        return false;
      }
    }

    solved[course] = true;

    return true;
  };

  for(let i = 0; i < numCourses; i++) {
    if (!checkCourse(i)) {
      return false;
    }
  }

  return true;
};
