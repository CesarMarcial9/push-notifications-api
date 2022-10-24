const mockInsight = {
  action: "created",
  insight: {
    active_at: "2020-03-31T18:41:32+00:00",
    client_guid: "CLT-0858efd1-2d2e-6a5d-f2b5-c7dad42ef184",
    created_at: "2020-03-31T18:41:32+00:00",
    description:
      "It looks like your most recent bill from Comcast was lower than it normally is. You paid $31.26, which is 28% lower than your recent average payment of $43.43.",
    guid: "BET-725b097e-ab18-43ca-a7fe-3c98c5a1db08",
    has_associated_accounts: true,
    has_associated_categories: true,
    has_associated_merchants: false,
    has_associated_scheduled_payments: false,
    has_associated_transactions: true,
    has_been_displayed: false,
    is_dismissed: false,
    template: "BillAmountNotStandard",
    title: "Bill lower than usual",
    updated_at: "2020-03-31T18:41:32+00:00",
    user_guid: "USR-29dfffe5-296e-4784-89fd-6e81c8e682e6",
    user_id: "abc-123-abcd",
  },
};

module.exports = mockInsight