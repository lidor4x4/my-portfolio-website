import styled from "styled-components";

export const ContactMeContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactMeTitle = styled.h1`
  font-family: "Assistant", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 46px;
  font-weight: 500;
  color: #141c3a;
  margin: 10rem 0 5rem 0;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ContactMeForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactMeFormLabel = styled.label`
  margin: 0 0 100px;
  color: #293374a6;
  font-size: 19px;
  font-family: "Assistant", Tahoma, Geneva, Verdana, sans-serif;
  
`;

export const ContactMeFormInputContiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContactMeFormTextareaContiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ContactMeFormInput = styled.input`
  border: 1px solid #e6edf9;
  background-color: #fffefe;
  width: 50%;
  font-size: 1.4rem;
  padding: 10.2px 15.8px;
  outline: none;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactMeFormTextArea = styled.textarea`
  padding: 15.8px;
  font-size: 1.4rem;
  outline: none;
  border: 1px solid #e6edf9;
  resize: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubmintButton = styled.button`
  padding: 14px 64px;
  color: #6e07f3;
  margin-top: 2.5rem;
  border: 2px solid #6e07f3;
  background-color: #fff;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    transition: background-color 200ms ease-in;
    background-color: #6e07f3;
    color: #fff;
  }
`;
