import { screen } from "@testing-library/react";

export function getByTextContent(textMatch: string | RegExp): HTMLElement {
  return screen.getByText((content, node) => {
    // console.log(node?.classList.toString(), node?.textContent);
    const hasText = (node: Element) =>
      node.textContent === textMatch || node.textContent?.match(textMatch);
    const nodeHasText = hasText(node as Element);
    // console.log(node?.tagName, node.classList.toString(), nodeHasText);

    // asserting that only one element has the textMatch we are looking for
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child)
    );
    // console.log(childrenDontHaveText)
    return (nodeHasText && childrenDontHaveText) || false;
  });
}

export async function findByTextContent(
  textMatch: string | RegExp
): Promise<HTMLElement> {
  return screen.findByText((content, node) => {
    const hasText = (node: Element) =>
      node.textContent === textMatch || node.textContent?.match(textMatch);
    const nodeHasText = hasText(node as Element);
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child)
    );
    return (nodeHasText && childrenDontHaveText) || false;
  });
}
