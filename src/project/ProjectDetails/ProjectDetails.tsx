import axios from "axios";
import styles from "./ProjectDetails.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Project, User, File } from "../../entity/project";
import { Loading } from "../../assets/loading/Loading";
import { BackButton } from "../../assets/back/back";
import { useState } from "react";

type FileTableProps = {
  files: File[] | undefined;
};

const FileTable: React.FC<FileTableProps> = (props) => {
  const { files } = props;
  if (!files || !files.length)
    return <p>There are not any files associated with this project.</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>File Type</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file) => {
          return (
            <tr key={file.id}>
              <td>{file.name}</td>
              <td>{file.file_type}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

type UserTableProps = {
  users: User[] | undefined;
};

const UserTable: React.FC<UserTableProps> = (props) => {
  const { users } = props;
  if (!users || !users.length)
    return <p>There are not any users associated with this project.</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

enum DetailTab {
  users = "users",
  files = "files",
}

export const ProjectDetails = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<DetailTab>(DetailTab.users);
  const params = useParams();
  const {
    isLoading,
    error,
    data: project,
  } = useQuery({
    queryKey: [`project/${params.projectId}`],
    queryFn: () =>
      axios.get<Project>(`http://127.0.0.1:80/project/${params.projectId}`, {
        headers: {
          Accept: "application/json",
        },
      }),
  });
  return (
    <div className={styles.projectDetails}>
      <header>
        <BackButton onClick={() => navigate("/")} />
        <h2>Project Details</h2>
      </header>
      {isLoading && <Loading />}
      <span className={styles.entityTabs}>
        <p
          className={selectedTab === DetailTab.users ? styles.selected : ""}
          onClick={() => setSelectedTab(DetailTab.users)}>
          Users
        </p>
        <p
          className={selectedTab === DetailTab.files ? styles.selected : ""}
          onClick={() => setSelectedTab(DetailTab.files)}>
          Files
        </p>
      </span>
      {selectedTab === DetailTab.users && (
        <UserTable users={project?.data.users} />
      )}
      {selectedTab === DetailTab.files && (
        <FileTable files={project?.data.files} />
      )}
    </div>
  );
};
