import { Routes, Route, Navigate, HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./assets/styles/App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import QuestionIndex from "./pages/Questions/QuestionIndex";
import Result from "./pages/Result";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AdminRoute from "./components/AdminRoute";
import QuestionAdd from "./pages/Questions/QuestionAdd";
import QuestionTrash from "./pages/Questions/QuestionTrash";
import QuestionEdit from "./pages/Questions/QuestionEdit";

function App() {
  const history = createBrowserHistory({ window });
  const data = {
    questions: 
      [
        {
          "id": 1,
          "isTrash": false,
          "title": "How to declare JavaScript variables?",
          "options": [
            {
              "title": "with var",
              "correct": true
            },
            {
              "title": "with let",
              "correct": true
            },
            {
              "title": "with const",
              "correct": true
            },
            {
              "title": "with variable"
            },
            {
              "title": "with declare"
            },
            {
              "title": "with new"
            },
            {
              "title": "with number"
            },
            {
              "title": "with string"
            },
            {
              "title": "with boolean"
            },
            {
              "title": "with nothing"
            }
          ]
        },
        {
          "id": 2,
          "isTrash": false,
          "title": "When was JavaScript invented?",
          "options": [
            {
              "title": "September 1998"
            },
            {
              "title": "October 1999"
            },
            {
              "title": "September 1995",
              "correct": true
            },
            {
              "title": "September 1993"
            },
            {
              "title": "August 1990"
            },
            {
              "title": "January 1995"
            },
            {
              "title": "with number"
            },
            {
              "title": "December 1995"
            },
            {
              "title": "March 1996"
            },
            {
              "title": "January 1970"
            }
          ]
        },
        {
          "id": 3,
          "isTrash": false,
          "title": "Who or which company created JavaScript?",
          "options": [
            {
              "title": "Jordan Walke"
            },
            {
              "title": "Netscape",
              "correct": true
            },
            {
              "title": "Jack Ma"
            },
            {
              "title": "Nayok Razzaq"
            },
            {
              "title": "Takla Rubel"
            },
            {
              "title": "Tarzan"
            },
            {
              "title": "Brendan Eich",
              "correct": true
            },
            {
              "title": "Mark Zuckerburg"
            },
            {
              "title": "Bill Gates"
            },
            {
              "title": "Steve Jobs"
            }
          ]
        },
        {
          "id": 4,
          "isTrash": false,
          "title": "What is the latest version of ECMAScript",
          "options": [
            {
              "title": "ES2020"
            },
            {
              "title": "ES2021",
              "correct": true
            },
            {
              "title": "ES6"
            },
            {
              "title": "ES7"
            },
            {
              "title": "ES8"
            },
            {
              "title": "ES2022"
            },
            {
              "title": "ES21"
            },
            {
              "title": "ES3"
            },
            {
              "title": "ES9"
            },
            {
              "title": "ES2020"
            }
          ]
        }
      ],
    users: [
        {
            "email": "test@gmail.com",
            "name": 'John Doe',
            "is_admin": false,
            "password": '123456'

        },
        {
            "email": "admin@gmail.com",
            "name": 'Alex Doe',
            "is_admin": true,
            "password": '123456'
        }
    ]
}
  return (
    <>
    <AuthProvider>
        <Layout>
            <Routes>
            <Route path="/" element={<PublicRoute />} history={history}>
                <Route path="/login" element={<Login props={data} />} />
                <Route path="/" element={<Navigate to="/login" />} />
            </Route>
              <Route path="/" element={<PrivateRoute />} history={history}>
                <Route path="/quiz" element={<Quiz props={data} />} />
                <Route path="/result" element={<Result props={data} />} />
                <Route path="/" element={<AdminRoute />}>
                  <Route path="/questions" element={<QuestionIndex props={data} />} />
                  <Route path="/questions/add" element={<QuestionAdd props={data} />} />
                  <Route path="/questions/:id/edit" element={<QuestionEdit props={data} />} />
                  <Route path="/questions/trash" element={<QuestionTrash props={data} />} />
                </Route>
              </Route>
          </Routes>
        </Layout>
    </AuthProvider>
    </>
  )
}

export default App
