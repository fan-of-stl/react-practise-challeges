import React, { useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setValue(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    setData((prev) => [...prev, value]);

    setValue("");
  };

  const handleDelete = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TodoWrapper>
      <TodoFormWarpper>
        <InputField
          placeholder="Enter value here"
          onChange={handleChange}
          value={value}
        />
        <AddButton onClick={handleAddTodo}>Add</AddButton>
      </TodoFormWarpper>

      <TodoContainer>
        {console.log(data)}
        {data.map((ele, index) => (
          <TodoElement key={index}>
            {ele}{" "}
            <DeleteButton onClick={() => handleDelete(index)}>
              Delete
            </DeleteButton>
          </TodoElement>
        ))}
      </TodoContainer>
    </TodoWrapper>
  );
};

export default Todo;

const TodoWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const TodoFormWarpper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const InputField = styled.input`
  padding: 1%;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1rem;
  font-weight: bold;
`;

const Button = styled.button`
  color: #bf4f74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  color: #187df0;
  border-color: #187df0;
`;

const TodoContainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2%;
  max-height: 320px;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;


const TodoElement = styled.div`
  background: white;
  padding: 1%;
  width: 70%;
  text-align: center;
  margin: auto;
  border-radius: 0.35rem 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const DeleteButton = styled(Button)`
  color: #f17a7a;
  border-color: #f17a7a;
`;
