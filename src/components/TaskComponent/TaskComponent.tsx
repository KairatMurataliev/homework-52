import React from 'react';
import {Button, List} from 'antd';
import {DeleteOutlined} from "@ant-design/icons";

interface Props {
  title: string;
  onRemove: () => void
}

const TaskComponent: React.FC<Props> = ({title, onRemove}) => {
  return (
    <List.Item actions={[<Button  type="primary" danger onClick={onRemove} icon={<DeleteOutlined />}/>]}>
      <List.Item.Meta title={title}/>
    </List.Item>
  );
};

export default TaskComponent;