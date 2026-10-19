
function Courses() {
  const courses = [
    {
      title: 'Software Construction',
      description: 'React, application development and software design.',
      code: 'SC-301'
    },
    {
      title: 'Database Systems',
      description: 'Database design, SQL queries and data management.',
      code: 'DB-201'
    },
    {
      title: 'Web Engineering',
      description: 'Modern websites, frontend development and responsive UI.',
      code: 'WE-301'
    },
    {
      title: 'Software Engineering',
      description: 'Software requirements, design and project management.',
      code: 'SE-302'
    }
  ];

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h1>Courses</h1>
        <p className="text-muted">Explore the courses available in the Student Portal.</p>
      </div>

      <div className="row">
        {courses.map((course) => (
          <div className="col-md-6 col-lg-3 mb-4" key={course.code}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <span className="badge bg-primary mb-3">{course.code}</span>
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">{course.description}</p>
              </div>
              <div className="card-footer bg-white">
                <span className="text-primary">Course Information</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
