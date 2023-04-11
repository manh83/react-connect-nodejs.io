import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../model/interface";
import { Space, Table, Button, message, Popconfirm } from "antd";
import { getCategory } from "../../api/category";

interface IProps {
  category: ICategory[];
  onRemove: (id: string) => void;
}

const AdminCategory = (props: IProps) => {
  const [data, setData] = useState<ICategory[]>([]);
 
  useEffect(() => {
    setData(props.category);
  }, [props]);

  const removeCategory = (id: string) => {
    props.onRemove(id);
  };

  const confirm = (record: any) => {
    message.info("Xóa sản phẩm thành công");
    removeCategory(record._id);
  };
  return (
    <>
      <Button style={{marginBottom:20}}>
        <Link to={"/admin/category/add"}>Add Category</Link>
      </Button>
      <Table
        columns={[
          {
            title: "ID",
            dataIndex: "_id",
            key: "_id",
          },
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text: string) => <a>{text}</a>,
          },
          

          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <Popconfirm
                  placement="top"
                  title={"Bạn có chắc chắn muốn xóa không?"}
                  onConfirm={() => confirm(record)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                    <a href={`/admin/category/${record._id}/update`}>
                        <Button type="primary" style={{marginLeft:20}}>
                        Update
                        </Button>
                    </a>
                </Popconfirm>
              </Space>
            ),
          },
        ]}
        dataSource={data.map((category) => ({ ...category, key: category._id }))}
      />
    </>
  );
};

export default AdminCategory;
