import React from "react";
// eslint-disable-next-line import/no-unresolved
import Link from "next/link";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Hashtag = styled.a`
  color: #baddf9;
`;

const PostCardContent = ({ postData }) => (
  <div>
    {postData.split(/(#[^\s#]+)/g).map((v, i) => {
      if (v.match(/(#[^\s#]+)/)) {
        return (
          /* 사용자 의도가 들어가는 key => key = {i} 로 사용하겠음 */
          <Link href={`/hashtag/${v.slice(1)}`} key={i}>
            <Hashtag>{v}</Hashtag>
          </Link>
        );
      }
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
