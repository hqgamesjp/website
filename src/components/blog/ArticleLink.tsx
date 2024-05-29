import styled from "styled-components";

const ArticleLinkContainer = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  padding: 10px;
  margin: 40px 0;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const Thumbnail = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 15px;

  ${ArticleLinkContainer}:hover & {
    opacity: 0.6;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
`;

const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.p`
  font-size: 14px;
  margin-top: 0 !important;

  ${ArticleLinkContainer}:hover & {
    color: rgb(156 163 175);
  }

  @media (max-width: 767px) {
    font-size: 12px !important;
    margin-bottom: 2px !important;
  }
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 0 !important;

  ${ArticleLinkContainer}:hover & {
    color: rgb(156 163 175);
  }

  @media (max-width: 767px) {
    font-size: 13px !important;
    margin-bottom: 2px !important;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #888;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0 !important;

  ${ArticleLinkContainer}:hover & {
    color: rgb(156 163 175);
  }

  @media (max-width: 767px) {
    font-size: 12px !important;
    margin-bottom: 2px !important;
  }
`;

export default function ArticleLink({ article }: any) {
  return (
    <ArticleLinkContainer href={`/blog/${article.slug}`}>
      <Thumbnail src={article.thumbnail} alt={article.title} />
      <ArticleInfo>
        <Date>{article.date}</Date>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
      </ArticleInfo>
    </ArticleLinkContainer>
  );
}
