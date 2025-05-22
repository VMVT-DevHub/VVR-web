import styled from "styled-components";
import Icon from "../../styles/icons";
import { useDocDownload } from "../../utils/hooks";
import { MoonLoader } from "react-spinners";
import { theme } from "../../styles";

interface DownloadInfoProps {
  key: string;
  med_id: string;
  doc_id: string;
  name: string;
  title: string;
  lang: string;
  date: string;
}

export const DownloadInfo = ({
  med_id,
  doc_id,
  name,
  title,
  lang,
  date,
}: DownloadInfoProps) => {
  const { isFetching: isFetchingPreview, refetch: refetchPreview } =
    useDocDownload(doc_id, name, true, med_id);
  const { isFetching: isFetchingDownload, refetch: refetchDownload } =
    useDocDownload(doc_id, name, false, med_id);

  return (
    <DocumentDownloadContainer key={doc_id}>
      <DownloadTitle>
        <p>{title}</p>
        {lang} {date}
      </DownloadTitle>
      <ButtonContainer>
        <StyledButton
          onClick={() => refetchPreview()}
          disabled={isFetchingPreview}
        >
          {isFetchingPreview ? (
            <MoonLoader color={theme.colors.primary} size={14} />
          ) : (
            <Icon name="view" />
          )}
          Peržiūrėti
        </StyledButton>
        <StyledButton
          onClick={() => refetchDownload()}
          disabled={isFetchingDownload}
        >
          {isFetchingDownload ? (
            <MoonLoader color={theme.colors.primary} size={14} />
          ) : (
            <Icon name="download" />
          )}
          Atsisiųsti
        </StyledButton>
      </ButtonContainer>
    </DocumentDownloadContainer>
  );
};

const DownloadTitle = styled.div`
  margin-top: 4px;
  font-family: "inter";
  font-size: 0.8rem;
  & p {
    font-weight: 500;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  &:hover {
    font-weight: bold;
  }
  &:disabled {
    opacity: 0.8;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 8px;
`;

const DocumentDownloadContainer = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey_light};
  font-size: 1rem;
  padding: 8px 16px 12px 16px;
  border-radius: 20px;
`;
