import styled from "styled-components";

export const ToolbarContainer = styled.div`
    height: 5vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    padding-left: 20px;
`;

export const IconButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: ${({ active }) => (active ? '#0066ff' : '#666666')};
    transition: color 0.15s;

    &:hover {
    color: #004ecc;
`;