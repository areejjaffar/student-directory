import React, { useMemo, useState } from 'react';

import Navbar from './components/Navbar';
import Breadcrumb from './components/Breadcrumb';
import PageHeader from './components/PageHeader';
import StudentList from './components/StudentList';
import Pagination from './components/Pagination';
import AlertMessage from './components/AlertMessage';
import Footer from './components/Footer';

const initialStudents = [
  { id: 101, name: 'Jane Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 102, name: 'Mary Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 103, name: 'Gant Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 104, name: 'Amm Doe', major: 'Computer Science', year: 2, gpa: 3.8 },
  { id: 105, name: 'Ali Khan', major: 'Software Engineering', year: 3, gpa: 3.6 },
  { id: 106, name: 'Sara Ahmed', major: 'Computer Science', year: 1, gpa: 3.9 },
  { id: 107, name: 'Hassan Ali', major: 'Information Technology', year: 2, gpa: 3.5 },
  { id: 108, name: 'Ayesha Noor', major: 'Software Engineering', year: 4, gpa: 3.7 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [message, setMessage] = useState('');
  const [activePage, setActivePage] = useState('home');

  const studentsPerPage = 4;

  // Real-time search filter (type karte hi instantly filter hoga)
  const filteredStudents = useMemo(() => {
    const text = searchInput.toLowerCase().trim();

    return students.filter(
      (student) =>
        student.name.toLowerCase().includes(text) ||
        String(student.id).includes(text) ||
        student.major.toLowerCase().includes(text)
    );
  }, [students, searchInput]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredStudents.length / studentsPerPage)
  );

  const visibleStudents = filteredStudents.slice(
    (currentPage - 1) * studentsPerPage,
    currentPage * studentsPerPage
  );

  function handleSearchChange(e) {
    setSearchInput(e.target.value);
    setCurrentPage(1);
  }

  function handleNavigate(id) {
    setActivePage(id);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  function handleAddStudent() {
    const name = window.prompt('Enter student name:');
    if (!name?.trim()) return;

    const major = window.prompt('Enter student major:');
    if (!major?.trim()) return;

    const newId = Math.max(100, ...students.map((s) => s.id)) + 1;

    const newStudent = {
      id: newId,
      name: name.trim(),
      major: major.trim(),
      year: 1,
      gpa: 0
    };

    setStudents((previous) => [...previous, newStudent]);
    setSearchInput('');
    setCurrentPage(Math.ceil((students.length + 1) / studentsPerPage));
    setMessage(`${newStudent.name} added successfully.`);
  }

  function handleDeleteStudent(id) {
    const student = students.find((item) => item.id === id);
    if (!student) return;

    setStudents((previous) =>
      previous.filter((item) => item.id !== id)
    );

    setCurrentPage((page) =>
      Math.min(
        page,
        Math.max(1, Math.ceil((students.length - 1) / studentsPerPage))
      )
    );

    setMessage(`${student.name} deleted successfully.`);
  }

  function handleViewProfile(student) {
    window.alert(
      `Student Profile\n\n` +
      `Name: ${student.name}\n` +
      `ID: ${student.id}\n` +
      `Major: ${student.major}\n` +
      `Year: ${student.year}\n` +
      `GPA: ${student.gpa.toFixed(1)}`
    );
  }

  return (
    <>
      <Navbar
        searchInput={searchInput}
        setSearchInput={handleSearchChange}
        onNavigate={handleNavigate}
        activePage={activePage}
      />

      <main className="container my-4" id="home">
        <section id="page-header" className="mb-4">
          <PageHeader onAddStudent={handleAddStudent} />
        </section>

        <section id="student-list" className="mb-4">
          <h5 className="mb-3">Student Directory</h5>

          <StudentList
            students={visibleStudents}
            onViewProfile={handleViewProfile}
            onDelete={handleDeleteStudent}
          />
        </section>

        <section id="pagination" className="mb-4">
          <Pagination
            currentPage={Math.min(currentPage, totalPages)}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>

        <section id="alert-message" className="mb-4">
          <AlertMessage
            message={message}
            onClose={() => setMessage('')}
          />
        </section>
      </main>

      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;