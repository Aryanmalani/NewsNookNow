import React, { useState, useEffect } from 'react';

// Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
};

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    // Simulate fetching user data from a backend API
    setTimeout(() => {
      const fetchedUsers = [
        { 
          id: 1, 
          name: 'Tirth Doshi', 
          email: 'tirthdoshi@example.com', 
          role: 'User', 
          lastLogin: '2024-11-14T13:24:00', 
          createdAt: '2024-05-22T09:30:00', 
          saved_articles: [1, 2] 
        },
        { 
          id: 2, 
          name: 'Ruturaj Bagada', 
          email: 'ruturaj@example.com', 
          role: 'User', 
          lastLogin: '2024-11-15T08:10:00', 
          createdAt: '2024-03-15T14:10:00', 
          saved_articles: [3, 4] 
        },
        { 
          id: 3, 
          name: 'Dhruv chaudhary', 
          email: 'dhruv@example.com', 
          role: 'User', 
          lastLogin: '2024-11-13T18:45:00', 
          createdAt: '2023-07-18T11:00:00', 
          saved_articles: [2, 4] 
        },
      ];
      setUsers(fetchedUsers);
      setLoading(false);
    }, 1000);  // Mocking a delay to simulate fetching
  }, []);

  const getSavedArticles = (savedArticlesIds) => {
    const articles = [
      { id: 1, title: 'Article 1' },
      { id: 2, title: 'Article 2' },
      { id: 3, title: 'Article 3' },
      { id: 4, title: 'Article 4' },
    ];

    return savedArticlesIds.map((id) => {
      const article = articles.find((article) => article.id === id);
      return article ? article.title : 'Unknown Article';
    }).join(', ');
  };

  useEffect(() => {
    // Update time every minute to keep the dashboard fresh
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 60000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h2 className="my-4">Admin Dashboard</h2>
      
      {/* Current Date and Time */}
      <div className="d-flex justify-content-between mb-4">
        <div className="current-time">
          <h4>{`Current Date & Time: ${currentTime}`}</h4>
        </div>
        <div>
          <button className="btn btn-success" onClick={() => alert('Refresh data')}>Refresh Data</button>
        </div>
      </div>

      <div className="row">
        {users.map((user) => (
          <div className="col-md-4" key={user.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <p className="card-text"><strong>Role:</strong> {user.role}</p>
                <p className="card-text"><strong>Account Created:</strong> {formatDate(user.createdAt)}</p>
                <p className="card-text"><strong>Last Login:</strong> {formatDate(user.lastLogin)}</p>
                <p className="card-text"><strong>Saved Articles:</strong> {getSavedArticles(user.saved_articles)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;