import Select from "react-select";
import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: #ffffff;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 90%;
  font-family: arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #2b6dad;
    outline: 0;
  }
`;

export const CardInputIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 6px;
  color:  #cc0000
  width: 24px;
  height: 24px;
  font-family: inherit;
  font-size: 14px;
`;

export const CardSelectInput = styled(Select)`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
`;

export const CardProfileLabel = styled.label`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 20px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
`;

export const CardButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 40%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #2b6dad;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardTable = styled.table`
  margin: 0 auto;
  width: 90%;
`;
export const CardTableBody = styled.tbody`
  margin: 0 auto;
  width: 90%;
`;

export const CardRow = styled.tr`
  text-align: center;
  width: 100%;
`;

export const CardFieldLeft = styled.td`
  width: 49%;
  text-align: right;
  float: left;
`;

export const CardFieldRight = styled.td`
  text-align: left;
  width: 49%;
  float: right;
`;
