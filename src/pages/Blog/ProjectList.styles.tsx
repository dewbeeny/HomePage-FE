import styled from 'styled-components';

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  min-width: 1000px;
`;

// 상단 필터(기수·트랙)들을 감싸는 컨테이너
export const TableContainer = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  
  height: 10vh;
  min-height: 60px;
`;

/** 실제로 '기수' 버튼이나 '트랙' 버튼을 감쌀 컨테이너 예시 */
export const FilterWrapper = styled.div`
  position: relative; /* 드롭다운 위치 계산을 위해 relative 사용 */

  display: flex;
  flex-direction: column;
  min-height: 80px; /* 필요에 따라 조절 */

`;

/** 기수 버튼 스타일 */
export const FilterGradeButton = styled.button`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 0px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  font-size: 18px;
  font-weight: 500;

  margin-top: auto;
  flex: space-between;
  
  /* 필요에 따라 hover, focus 스타일 추가 */
  min-width: 100px;
`;
/* 트랙 버튼 스타일*/
export const FilterTrackButton = styled.button`
  background-color: var(--FarmSystem_Green06);
  color: #fff;
  padding: 8px 0px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  font-size: 18px;
  font-weight: 500;

  margin-top: auto;
  min-width: 150px;
  flex: space-between;
  
  /* 필요에 따라 hover, focus 스타일 추가 */
`;


/** 드롭다운 목록 컨테이너 */
export const DropdownMenu = styled.div`
  position: absolute;
  top: 110px;     /* 버튼 아래로 살짝 떨어뜨림 */
  left: 0;
  width: 100%;
  text-align: center;
  
  background-color: #fff;
  border: 3px solid var(--FarmSystem_Green04);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  
  z-index: 999;  /* 드롭다운이 맨 위 */
`;

/** 드롭다운 목록의 각 아이템 */
export const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  
  &:hover {
    z-index: 990;
    background-color: #f0fff0; /* 연한 초록 강조 */
    border-radius: 8px;
  }
`;

/** 프로젝트 리스트(카드)들을 감싸는 컨테이너 */
export const ListContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  
  /* 예시로 카드 3개씩 보여주는 레이아웃 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  
  /* 필요하다면 반응형 고려하여 media query 등 사용 */
`;

