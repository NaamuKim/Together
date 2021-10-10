import React from "react";
import { Button, Card, List } from "antd";
import styled from "@emotion/styled";
import { StopOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const FollowCard = styled(List)`
  margin-bottom: 20px;
`;

const LoadMore = styled.div`
  text-align: center;
  margin: 10px 0; ;
`;

const FollowList = ({ header, data }) => {
  return (
    <FollowCard
      grid={{ gutter: 4, xs: 2, md: 3 }}
      size="small"
      header={<div>{header}</div>}
      loadmore={
        <LoadMore>
          <Button>더 보기</Button>
        </LoadMore>
      }
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
export default FollowList;
