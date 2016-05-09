'use strict';

export interface UseCase<Req, Res> {
    (request: Req): Promise<Res>
}

export default UseCase;