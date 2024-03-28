import {useState} from 'react';
import {Col, List, Row} from "antd";
import AddTaskForm from "../../components/AddTask/AddTaskForm.tsx";
import TaskComponent from "../../components/TaskComponent/TaskComponent.tsx";

interface Task {
  id: string;
  title: string;
}

const TasksPage = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  const taskAdd = () => {
    const tasksCopy = [...tasks];
    const newTask: Task = {
      id: new Date().toISOString(),
      title: taskTitle,
    };
    tasksCopy.push(newTask);
    setTaskTitle('');
    setTasks(tasksCopy);
  }

  const changeHandler = (value: string) => {
    setTaskTitle(value);
  }

  const removeHandler = (id: string) => {
    const copyTasks = [...tasks];
    const index = copyTasks.findIndex((task) => task.id === id);

    if (index !== -1) {
      copyTasks.splice(index, 1);
      setTasks(copyTasks);
    }
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <AddTaskForm
            onAddTask={taskAdd}
            onChange={changeHandler}
            taskTitle={taskTitle}
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <List
            className="demo-loadmore-list"
            itemLayout="horizontal"
            dataSource={tasks}
            renderItem={(item) => (
              <TaskComponent key={item.id} title={item.title} onRemove={() => removeHandler(item.id)}/>
            )}
          />
        </Col>
      </Row>
    </>
  )
};

export default TasksPage;