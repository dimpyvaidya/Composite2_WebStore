const allCourses = [{ // 0
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null
}, { // 1
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null
}];
const getCourseAsHtmlString = (course) => {

        return `
      <article class="course ${(course.category) ? `cat-${course.category}` : ''}">
        <h3 id="name">${course.name}</h3>
        <ul class="course-info">
          <li>Course Code: <strong>${course.code}</strong></li>
          <li>Instructor: <strong>${course.instructor}</strong></li>
          <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
          <li>
            Weeks: <strong>${course.weeks}</strong>
            <ul>
              <li>Includes Break: <strong>${(course.breaks) ? 'Yes' : 'No'}</strong></li>
            </ul>   
          </li>
          <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
        </ul>
      </article>`;
  }
  
  
const renderCoursesFromArray = (arr) => {
    document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n');
    let res = 'results';
    if (arr.length == 1) {
        res = 'result'
    }
    //let res = (arr.length > 1) ? 'results' : 'result';
    document.getElementById('numResults').innerHTML = `(${arr.length} ${res})`;
}

window.addEventListener('load', () => {
    // Event listeners
    document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
    // Start
    renderCoursesFromArray(allCourses);
});