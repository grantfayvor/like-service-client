import React, { useState, useEffect } from 'react';
import "../../App.css";
import { Badge } from 'react-bootstrap';
import constants from '../../constants';

const LikeButton = props => {
  const [page, setPage] = useState({});
  const [isActive, setActiveStatus] = useState(false);

  const like = async () => {
    const { page } = await fetch(`${constants.API_ENDPOINT}/api/page/${props.id}`, {
      method: "PUT"
    })
      .then(resp => resp.json());

    setActiveStatus(true);
    setPage(page);
  };

  useEffect(() => {
    const fetchPageInfo = async () => {
      const { page } = await fetch(`${constants.API_ENDPOINT}/api/page/${props.id}`)
        .then(resp => resp.json());

      setPage(page);
    };

    fetchPageInfo();
  }, [props.id]);

  return (
    <button className={`like__button ${isActive ? 'active' : ''}`} onClick={like}>
      <span id="thumbs-up" className="far fa-4x fa-thumbs-up"></span>
      <Badge variant="light">{page.noOfLikes || 0}</Badge>
      <span className="sr-only">number of likes</span>
    </button>
  )
}

export default LikeButton;