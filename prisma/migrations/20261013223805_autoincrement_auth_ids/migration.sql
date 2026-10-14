-- AlterTable
CREATE SEQUENCE account_id_seq;
ALTER TABLE "account" ALTER COLUMN "id" SET DEFAULT nextval('account_id_seq');
ALTER SEQUENCE account_id_seq OWNED BY "account"."id";

-- AlterTable
CREATE SEQUENCE session_id_seq;
ALTER TABLE "session" ALTER COLUMN "id" SET DEFAULT nextval('session_id_seq');
ALTER SEQUENCE session_id_seq OWNED BY "session"."id";

-- AlterTable
CREATE SEQUENCE verification_id_seq;
ALTER TABLE "verification" ALTER COLUMN "id" SET DEFAULT nextval('verification_id_seq');
ALTER SEQUENCE verification_id_seq OWNED BY "verification"."id";
