import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Loading } from "../../assets/loading/Loading";
import { ErrorPage } from "../../error/ErrorPage/ErrorPage";
import styles from "./ProjectsTable.module.scss";
import { Project } from "../../entity/project";

const emptyProjects = () => {
  return <p>There are no projects to display</p>;
};

export const ProjectsTable = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: () =>
      axios.get<Project[]>("http://127.0.0.1:80/project", {
        headers: {
          Accept: "application/json",
        },
      }),
  });
  if (error) {
    return <ErrorPage />;
  }
  return (
    <div className={styles.projectsTable}>
      <h2>Projects</h2>
      {isLoading && <Loading />}
      {projects ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.data.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.name}</td>
                  <td>{project.start_date}</td>
                  <td>
                    <button onClick={() => navigate(`/${project.id}`)}>
                      View Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        emptyProjects()
      )}
    </div>
  );
};
