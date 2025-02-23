import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;


/** 필터 버튼과 드롭다운을 감싸는 컨테이너 */
export const FilterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  margin-top: 30px;
`;

/** 기수 버튼 */
export const FilterGradeButton = styled.button<{$isMobile: boolean; $isTablet: boolean;}>`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => (props.$isMobile ? '15px' : '8px')};
  cursor: pointer;
  text-align: left;
  font-size: ${(props) => (props.$isMobile ? '12px' : props.$isTablet ? '14px' : '16px')};
  font-weight: 500;
  width: ${(props) => (props.$isMobile ? '80px' : props.$isTablet ? '90px' : '110px')}; /* 기수 버튼은 작게 */
`;

/** 트랙 버튼 */
export const FilterTrackButton = styled.button<{$isMobile: boolean; $isTablet: boolean;}>`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: ${(props) => (props.$isMobile ? '15px' : '8px')};
  cursor: pointer;
  text-align: left;
  font-size: ${(props) => (props.$isMobile ? '12px' : props.$isTablet ? '14px' : '16px')};
  font-weight: 500;
  width: ${(props) => (props.$isMobile ? '100px' : props.$isTablet ? '120px' : '160px')}; /* 트랙 버튼은 큼 */
`;

/** 기수 드롭다운 */
export const DropdownGradeMenu = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  position: absolute;
  top: 45px;
  left: 0;
  width: ${(props) => (props.$isMobile ? '80px' : props.$isTablet ? '90px' : '110px')}; /* 기수 버튼과 동일한 크기 */
  text-align: left;
  background-color: #fff;
  border: 3px solid var(--FarmSystem_Green04);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;

/** 트랙 드롭다운 */
export const DropdownTrackMenu = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  position: absolute;
  top: 45px;
  left: 0;
  width: ${(props) => (props.$isMobile ? '100px' : props.$isTablet ? '120px' : '160px')}; /* 트랙 버튼과 동일한 크기 */
  text-align: left;
  background-color: #fff;
  border: 3px solid var(--FarmSystem_Green04);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  z-index: 999;
`;

/** 드롭다운 아이템 */
export const DropdownItem = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  padding: 8px 12px;
  cursor: pointer;
  font-size: ${(props) => (props.$isMobile ? '10px' : props.$isTablet ? '12px' : '14px')};
  color: #333;
  
  &:hover {
    background-color: #f0fff0;
    border-radius: 8px;
  }
`;

/** 필터 컨테이너 */
export const TableContainer = styled.div<{$isMobile: boolean; $isTablet: boolean;}>`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 10vh;
  min-height: 60px;
  justify-content: flex-start;
  margin-top: ${(props) => (props.$isMobile ? '0px' : props.$isTablet ? '15px' : '60px')};
`;

/** 프로젝트 리스트(카드)들을 감싸는 컨테이너 */

export const ListContainer = styled.div<{$isTablet: boolean; $isBig: boolean;}>`
  width: 100%;
  margin: 20px auto;
  min-width: ${(props) => (props.$isTablet ? '500px' : '800px')};

  display: grid;
  grid-template-columns: repeat(auto-fit, 300px); /*자동 너비 조정 */
  gap: 20px ${(props) => (props.$isTablet ? "1vw": props.$isBig ? "4vw": "10vw")};
`;

/* 비어 있을 떄 출력하는 레이아웃 잡는 컨테이너 */
export const DescriptionContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: block;
`;

/* 텍스트 컨테이너*/
export const TextContainer = styled.div<{$isMobile: boolean;}>`
  padding-top: 20vh;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: black;
  font-size: ${(props) => (props.$isMobile ? "20px" : "32px")};
  font-weight: 600;

  a {
    font-size: ${(props) => (props.$isMobile ? "10px" : "14px")};
    font-weight: 300;
  }
  gap: 10px;
`;
