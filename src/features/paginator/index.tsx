import * as S from './styled';
import { useRootPageContext } from '../root';
import { useEffect } from 'react';
import { ArrowButton } from '@/shared/ui';

export const Paginator = () => {
  const { page, setPage } = useRootPageContext();

  useEffect(() => {
    console.log(page);
  }, [page]);

  return (
    <S.PaginatorStyled>
      <S.PaginatorPageNumber>0{page + 1}/06</S.PaginatorPageNumber>
      <S.PaginatorButtons>
        <ArrowButton $disabled={page === 0} onClick={() => setPage(page - 1)} />
        <ArrowButton
          $disabled={page === 5}
          $reversed
          onClick={() => setPage(page + 1)}
        />
      </S.PaginatorButtons>
    </S.PaginatorStyled>
  );
};
