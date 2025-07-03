import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export interface PageSelectorProps {
  total: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}
export const PageSelector = ({
  total,
  currentPage,
  setCurrentPage,
}: PageSelectorProps) => {
  
  const [pageLayout, setPageLayout] = useState<number[]>([1, 2, 3, 4, 5]);
  const totalPages = Math.ceil(total / 10);
  const { t } = useTranslation();

  useEffect(() => {
    calculatePageLayout(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, total]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleCurrentPage = (number: number) => {
    setCurrentPage(number);
    calculatePageLayout(number);
  };

  const calculatePageLayout = (page: number) => {
    let start = Math.max(1, page - 2);
    const end = Math.min(totalPages, start + 4);
    start = Math.max(1, end - 4);

    const newPageLayout = [];
    for (let i = start; i <= end; i++) {
      newPageLayout.push(i);
    }

    setPageLayout(newPageLayout);
  };

  return (
    <PageContainer>
      <SideButton onClick={handlePreviousPage} disabled={currentPage == 1}>
        {t("medicines.previous")}
      </SideButton>
      {pageLayout.map((button) => {
        return (
          <MiddleButton
            key={button}
            $currentlyActive={currentPage == button}
            onClick={() => handleCurrentPage(button)}
          >
            {button}
          </MiddleButton>
        );
      })}
      <SideButton onClick={handleNextPage} disabled={currentPage == totalPages}>
        {t("medicines.next")}
      </SideButton>
    </PageContainer>
  );
};

const SideButton = styled.button<{ disabled: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey_light : theme.colors.primary};
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const MiddleButton = styled.button<{ $currentlyActive: boolean }>`
  background-color: ${({ theme, $currentlyActive }) =>
    $currentlyActive ? theme.colors.primary_light : theme.colors.white};
  color: ${({ theme, $currentlyActive }) =>
    $currentlyActive ? theme.colors.secondary : theme.colors.grey};
  width: 40px;
  height: 40px;
  padding: auto;
  border-radius: 8px;
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_light};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 16px 32px  32px 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  gap: 12px;
  font-size: 0.8rem;
  justify-content: center;
`;
