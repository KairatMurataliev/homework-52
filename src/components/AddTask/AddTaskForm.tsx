import React from 'react';
import {Button, Col, Input, Row} from "antd";

interface Props {
  taskTitle: string;
  onChange: (value: string) => void;
  onAddTask: React.MouseEventHandler
}

const AddTaskForm: React.FC<Props> = ({taskTitle, onChange, onAddTask}) => {
  return (
    <Row>
      <Col>
        <Input value={taskTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)} />
      </Col>
      <Col>
        <Button onClick={onAddTask} type="primary">
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default AddTaskForm;