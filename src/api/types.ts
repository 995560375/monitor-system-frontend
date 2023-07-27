// types.ts
export interface Node {
    nodeId: number;
    name: string;
}

export interface CaseEntity {
    taskId: number;
    subIarId: number;
    caseId: string;
    name: string;
    createdAt: string;
    finishedAt: string;
}

export interface Failure {
    failureId: number;
    trackNum: number;
    node: Node;
    keyword: string;
    createdAt: string;
    description: string;
    caseEntity: CaseEntity;
}

export interface Sort {
    empty: boolean;
    unsorted: boolean;
    sorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface BackendResponse {
    content: Failure[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

export interface Task {
    AutomationStatus: string;
    CurrentNode: string;
    EndNode: string;
    InterventionStatus: number;
    TrackNumber: string;
    User: string;
}
