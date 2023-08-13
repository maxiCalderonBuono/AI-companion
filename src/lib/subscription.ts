import { auth } from "@clerk/nextjs";
import prismaDb from "./prismadb";

const DAYS_IN_MS = 86_400_00;

export const checkSubscriptionId = async () => {
  const { userId } = auth();
  if (!userId) return false;

  const userSubscription = await prismaDb.userSubscription.findUnique({
    where: {
      userId,
    },
    select: {
      stripCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
      stripeSubscrptionId: true,
    },
  });

  if (!userSubscription) return false;

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripCurrentPeriodEnd?.getTime()! + DAYS_IN_MS >=
      Date.now();

  return !!isValid;
};
